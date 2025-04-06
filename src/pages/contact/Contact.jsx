import { useForm } from 'react-hook-form'
import Label from './components/Label/Label';
import Textarea from './components/Textarea/Textarea';
import TextInput from './components/TextInput/TextInput';
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
            <Label name="name" label="お名前" />
            <TextInput
              name="name"
              type="text"
              register={register("name", {
                required: "お名前は必須です",
                maxLength: {value: 30, message: "30文字以内で入力してください"}
              })}
              error={errors.name?.message}
              disabled={isSubmitting}
            />
          </div>
          <div className={classes.contact__content}>
            <Label name="email" label="メールアドレス" />
            <TextInput
              name="email"
              type="email"
              register={register("email", {
                required: "メールアドレスは必須です",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "メールアドレスの形式が正しくありません"
                }
              })}
              error={errors.email?.message}
              disabled={isSubmitting}
            />
          </div>
          <div className={classes.contact__content}>
            <Label name="message" label="本文" />
            <Textarea
              name="message"
              register={register("message", {
                required: "本文は必須です",
                maxLength: {value: 500, message: "500文字以内で入力してください"}
              })}
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
