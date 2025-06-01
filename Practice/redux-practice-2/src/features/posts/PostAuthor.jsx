import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

const PostAuthor = ({ userId }) => {
  const users = useSelector(selectAllUsers) || []; // Fallback to empty array
  const usersStatus = useSelector(state => state.users?.status);

  // Safely find the author
  const author = Array.isArray(users) 
    ? users.find(user => user.id === userId)
    : null;

  if (usersStatus === 'loading') {
    return <span>Loading author...</span>;
  }

  if (usersStatus === 'failed') {
    return <span>Unknown author</span>;
  }

  return <span>by {author ? author.name : 'Unknown author'}</span>;
};

export default PostAuthor;