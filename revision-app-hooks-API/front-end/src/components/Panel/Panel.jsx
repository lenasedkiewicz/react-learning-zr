import { useState, useEffect } from "react";
import { List } from "../List/List";
import { Form } from "../Form/Form";
import styles from "./Panel.module.css";

export function Panel() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/words")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setIsLoading(false);
      });
  }, []);

  function handleFormSubmit(formData) {
    fetch("http://localhost:3000/words", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((res) => {
        setData((prevData) => [...prevData, res]);
      });
  }

  // ${id}
  function handleDeleteItem(id) {
    fetch(`http://localhost:3000/words/100`, { method: "DELETE" })
      .then((res) => {
        if (res.ok) {
          setData((prevData) => prevData.filter((item) => item.id !== id));
        } else {
          throw new Error("Błąd podczas usuwania!");
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  if (isLoading) {
    return <p>Ładowanie</p>;
  }

  return (
    <>
      <section className={styles.section}>
        <Form onFormSubmit={handleFormSubmit} />
        <List data={data} onDeleteItem={handleDeleteItem} />
      </section>
    </>
  );
}
