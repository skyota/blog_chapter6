import { useState } from 'react';
import classes from './Contact.module.css';

const Contact = () => {
  const [form, setForm] = useState({name: '', email: '', message: ''});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState({});

  const handleForm = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    const errorMessage = {};

    if (!form.name) {
      errorMessage.name = "お名前は必須です。";
    } else if (form.name.length > 30) {
      errorMessage.name = "お名前は30文字以内で入力してください。";
    }
    if (!form.email) {
      errorMessage.email = "メールアドレスは必須です。";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errorMessage.email = "メールアドレスの形式が正しくありません。";
    }
    if(!form.message) {
      errorMessage.message = "本文は必須です。";
    } else if (form.message.length > 500) {
      errorMessage.message = "本文は500文字以内で入力してください。";
    }

    setError(errorMessage);
    return Object.keys(errorMessage).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    try {
      const res = await fetch("https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/contacts", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(form)
      });
      if (!res.ok) throw new Error("Network response was not ok");
      alert("送信しました");
      handleClear();
      setError({});
    } catch (error) {
      console.error("送信中にエラーが発生しました：", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClear = () => {
    setForm({name: '', email: '', message: ''});
  };

  return (
    <div className={classes.contact}>
      <div className='inner'>
        <div className={classes.contact__title}>
          <p>問合わせフォーム</p>
        </div>
        <form className={classes.contact__contents} onSubmit={handleSubmit}>
          <div className={classes.contact__content}>
            <label htmlFor='name'>お名前</label>
            <div className={classes.contact__input}>
              <input id='name' name='name' type='text' onChange={handleForm} value={form.name} disabled={isSubmitting} />
              {error.name && <p>{error.name}</p>}
            </div>
          </div>
          <div className={classes.contact__content}>
            <label htmlFor='email'>メールアドレス</label>
            <div className={classes.contact__input}>
              <input id='email' name='email' type='email' onChange={handleForm} value={form.email} disabled={isSubmitting} />
              {error.email && <p>{error.email}</p>}
            </div>
          </div>
          <div className={classes.contact__content}>
            <label htmlFor='message'>本文</label>
            <div className={classes.contact__input}>
              <textarea id='message' name='message' onChange={handleForm} value={form.message} disabled={isSubmitting} />
              {error.message && <p>{error.message}</p>}
            </div>
          </div>
          <div className={classes.contact__button}>
            <input type='submit' value='送信' disabled={isSubmitting} />
            <input type='reset' value='クリア' onClick={handleClear} disabled={isSubmitting} />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact;
