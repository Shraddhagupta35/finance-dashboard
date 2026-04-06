export default function RoleSwitcher({ role, setRole }) {
  return (
    <div>
      <label>Role: </label>
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="border p-2"
      >
        <option value="viewer">Viewer</option>
        <option value="admin">Admin</option>
      </select>
    </div>
  );
}