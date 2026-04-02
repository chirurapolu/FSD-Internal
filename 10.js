import { useState } from "react";

const STATUSES = ["To Do", "In Progress", "Done"];

export default function App() {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState("");
    const [search, setSearch] = useState("");

    const addTask = () => {
        if (!title.trim()) return;
        setTasks([...tasks, { id: Date.now(), title, status: "To Do" }]);
        setTitle("");
    };

    const updateStatus = (id, status) =>
        setTasks(tasks.map(t => (t.id === id ? { ...t, status } : t)));

    const deleteTask = (id) => setTasks(tasks.filter(t => t.id !== id));

    const filtered = tasks.filter(t => t.title.toLowerCase().includes(search.toLowerCase()));

    return (
        <div style={{ padding: 20 }}>
            <h1>Task Dashboard</h1>
            <input value={title} onChange={e => setTitle(e.target.value)} placeholder="New task..." />
            <button onClick={addTask}>Add</button>
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search..." style={{ marginLeft: 10 }} />

            <div style={{ display: "flex", gap: 20, marginTop: 20 }}>
                {STATUSES.map(status => (
                    <div key={status} style={{ flex: 1, border: "1px solid #ccc", padding: 10 }}>
                        <h3>{status}</h3>
                        {filtered.filter(t => t.status === status).map(t => (
                            <div key={t.id} style={{ background: "#f0f0f0", margin: 5, padding: 8 }}>
                                <b>{t.title}</b>
                                <select value={t.status} onChange={e => updateStatus(t.id, e.target.value)}>
                                    {STATUSES.map(s => <option key={s}>{s}</option>)}
                                </select>
                                <button onClick={() => deleteTask(t.id)}>🗑</button>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}