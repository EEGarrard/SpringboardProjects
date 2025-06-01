import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewPost } from "./postsSlice";
import { selectAllUsers, fetchUsers } from "../users/usersSlice";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const [addRequestStatus, setAddRequestStatus] = useState("idle");
  
  const dispatch = useDispatch();
  
  // Get users data and status
  const users = useSelector(selectAllUsers);
  const usersStatus = useSelector(state => state.users.status);
  const usersError = useSelector(state => state.users.error);

  // Load users on component mount
  useEffect(() => {
    if (usersStatus === 'idle') {
      dispatch(fetchUsers());
    }
  }, [usersStatus, dispatch]);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const canSave = 
    [title, content, userId].every(Boolean) && 
    addRequestStatus === "idle" &&
    usersStatus === "succeeded";

  const onSavePostClicked = async () => {
    if (canSave) {
      try {
        setAddRequestStatus('pending');
        await dispatch(addNewPost({ title, body: content, userId })).unwrap();
        setTitle('');
        setContent('');
        setUserId('');
        setAddRequestStatus('succeeded');
      } catch (err) {
        console.error('Failed to save the post', err);
        setAddRequestStatus('failed');
      }
    }
  };

  const renderAuthorDropdown = () => {
    if (usersStatus === 'loading') {
      return (
        <select disabled>
          <option>Loading authors...</option>
        </select>
      );
    }

    if (usersStatus === 'failed') {
      return (
        <select disabled className="error">
          <option>Error: {usersError || 'Failed to load authors'}</option>
        </select>
      );
    }

    return (
      <select
        id="postAuthor"
        value={userId}
        onChange={onAuthorChanged}
      >
        <option value="">Select an author</option>
        {users?.map(user => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    );
  };

  return (
    <section className="post-form">
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
          disabled={usersStatus !== 'succeeded'}
        />

        <label htmlFor="postAuthor">Author:</label>
        {renderAuthorDropdown()}

        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
          disabled={usersStatus !== 'succeeded'}
        />

        <button
          type="button"
          onClick={onSavePostClicked}
          disabled={!canSave}
        >
          {addRequestStatus === 'pending' ? 'Saving...' : 'Save Post'}
        </button>

        {addRequestStatus === 'failed' && (
          <p className="error">Failed to save post. Please try again.</p>
        )}
      </form>
    </section>
  );
};

export default AddPostForm;