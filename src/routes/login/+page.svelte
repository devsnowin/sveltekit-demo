<script>
  import FormInput from '../../components/FormInput.svelte';
</script>

<form
  method="post"
  action="?/login"
  class="w-full max-w-md flex flex-col gap-4 my-16"
>
  <h1 class="text-center text-4xl font-bold my-4">Login to your account</h1>
  <FormInput
    inputProps={{
      labelName: 'email',
      labelContent: 'What is your email?',
      type: 'email',
      placeholder: 'Enter your email id',
    }}
  />
  <FormInput
    inputProps={{
      labelName: 'password',
      labelContent: 'Create a strong password',
      type: 'password',
      placeholder: 'Enter your password',
    }}
  />

  <button class="btn btn-primary">Login</button>
</form>
