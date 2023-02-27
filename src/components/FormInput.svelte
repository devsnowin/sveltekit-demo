<script lang="ts">
  type InputProps = {
    labelName: string;
    labelContent: string;
    type: string;
    placeholder: string;
  };

  export let inputProps: InputProps;
</script>

<div class="form-control w-full">
  <label class="label" for={inputProps.labelName}>
    <span class="label-text">{inputProps.labelContent}</span>
  </label>
  <input
    type={inputProps.type}
    name={inputProps.labelName}
    placeholder={inputProps.placeholder}
    class="input input-bordered w-full focus:outline-primary"
  />
</div>
