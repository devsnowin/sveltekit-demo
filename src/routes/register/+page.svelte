<script>
  import FormInput from '../../components/FormInput.svelte';
</script>

<form
  method="POST"
  action="?/register"
  class="w-full max-w-md flex flex-col gap-4 my-16"
>
  <h1 class="text-center text-4xl font-bold my-4">Create your account</h1>
  <FormInput
    inputProps={{
      labelName: 'name',
      labelContent: 'What is your name?',
      type: 'text',
      placeholder: 'Enter your name',
    }}
  />
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

  <FormInput
    inputProps={{
      labelName: 'passwordConfirm',
      labelContent: 'Confirm your password',
      type: 'password',
      placeholder: 'Enter your password',
    }}
  />

  <button class="btn btn-primary" type="submit">Create</button>
</form>
