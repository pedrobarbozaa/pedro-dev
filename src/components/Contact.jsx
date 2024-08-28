import { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <form>
      <label>
        Nome:
        <input
          placeholder='Digite seu nome'
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          placeholder='Digite seu email'
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Mensagem:
        <input
          placeholder='Digite sua mensagem'
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </label>
    </form>
  );
};

export default Contact;
