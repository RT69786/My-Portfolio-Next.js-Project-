"use client";
import { createContext, useContext, useState } from "react";

const ContactContext = createContext();

export function ContactProvider({ children }) {
  const [showForm, setShowForm] = useState(false);

  const openForm = () => setShowForm(true);
  const closeForm = () => setShowForm(false);

  return (
    <ContactContext.Provider
      value={{
        showForm,
        openForm,
        closeForm,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
}

export function useContact() {
  return useContext(ContactContext);
}
