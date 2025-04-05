import { useForm } from 'react-hook-form'
import FormField from './components/FormField/FormField';
import classes from './Contact.module.css';

const Contact = () => {
  const {register, handleSubmit, reset, formState: {errors, isSubmitting}} = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await fetch("https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/contacts", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error("Network response was not ok");
      alert("送信しました");
      reset();
    } catch (error) {
      console.log("送信中にエラーが発生しました：", error);
    }
  };

  return (
    <div className={classes.contact}>
      <div className='inner'>
        <div className={classes.contact__title}>
          <p>問合わせフォーム</p>
        </div>
        <form className={classes.contact__contents} onSubmit={handleSubmit(onSubmit)}>
          <div className={classes.contact__content}>
            <FormField
              label="お名前"
              name="name"
              type="text"
              register={register}
              validation={{
                required: "お名前は必須です",
                maxLength: {value: 30, message: "30文字以内で入力してください"}
              }}
              error={errors.name?.message}
              disabled={isSubmitting}
            />
          </div>
          <div className={classes.contact__content}>
            <FormField
              label="メールアドレス"
              name="email"
              type="email"
              register={register}
              validation={{
                required: "メールアドレスは必須です",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "メールアドレスの形式が正しくありません"
                }
              }}
              error={errors.email?.message}
              disabled={isSubmitting}
            />
          </div>
          <div className={classes.contact__content}>
            <FormField
              label="本文"
              name="message"
              type="textarea"
              register={register}
              validation={{
                required: "本文は必須です",
                maxLength: {value: 500, message: "500文字以内で入力してください"}
              }}
              error={errors.message?.message}
              disabled={isSubmitting}
            />
          </div>
          <div className={classes.contact__button}>
            <input type='submit' value='送信' disabled={isSubmitting} />
            <input type='reset' value='クリア' onClick={() => reset()} disabled={isSubmitting} />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact;
