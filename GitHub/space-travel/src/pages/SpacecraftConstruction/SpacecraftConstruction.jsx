import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import SpaceTravelApi from "../../services/SpaceTravelApi";
import Layout from "../../components/Layout/Layout";
import styles from "./SpacecraftConstruction.module.css";

export default function SpacecraftConstruction() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isEditMode] = useState(!!id);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    capacity: "",
    description: "",
    pictureUrl: "",
  });

  const updateForm = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.capacity) newErrors.capacity = "Capacity is required";
    if (formData.capacity < 1) newErrors.capacity = "Must be at least 1";
    if (!formData.description.trim())
      newErrors.description = "Description is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const payload = {
      name: formData.name,
      capacity: parseInt(formData.capacity),
      description: formData.description,
      pictureUrl: formData.pictureUrl || undefined,
    };

    try {
      if (isEditMode) {
        await SpaceTravelApi.updateSpacecraft({ id, ...payload });
      } else {
        await SpaceTravelApi.buildSpacecraft(payload);
      }
      navigate("/spacecrafts");
    } catch (error) {
      setErrors({ submit: "Failed to save spacecraft" });
    }
  };
  useEffect(() => {
    if (!isEditMode) return;

    async function loadSpacecraft() {
      const response = await SpaceTravelApi.getSpacecraftById({ id });
      if (!response.isError) {
        setFormData({
          name: response.data.name,
          capacity: response.data.capacity.toString(),
          description: response.data.description,
          pictureUrl: response.data.pictureUrl || "",
        });
      }
    }
    loadSpacecraft();
  }, [id, isEditMode]);
  return (
    <Layout>
      <div className={styles.container}>
        <h1>{isEditMode ? "Edit" : "Build New"} Spacecraft</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label>
            Name*
            <input
              type="text"
              value={formData.name}
              onChange={(e) => updateForm("name", e.target.value)}
              required
            />
          </label>

          <label>
            Capacity*
            <input
              type="number"
              min="1"
              value={formData.capacity}
              onChange={(e) => updateForm("capacity", e.target.value)}
              required
            />
          </label>

          <label>
            Description*
            <textarea
              value={formData.description}
              onChange={(e) => updateForm("description", e.target.value)}
              required
            />
          </label>

          <label>
            Image URL
            <input
              type="url"
              value={formData.pictureUrl}
              onChange={(e) => updateForm("pictureUrl", e.target.value)}
            />
          </label>

          <div className={styles.buttonGroup}>
            <button type="button" onClick={() => navigate(-1)}>
              Cancel
            </button>
            <button type="submit">
              {isEditMode ? "Update" : "Build"} Spacecraft
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
