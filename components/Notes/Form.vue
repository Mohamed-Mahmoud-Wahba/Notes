<template>
  <div>
    <NCard class="card">
      <input class="input" placeholder="My Title" v-model="notesInput.title" />
      <textarea
        class="textarea"
        placeholder="My note"
        v-model="notesInput.note"
      />
      <NButton class="button" @click="handleSubmit">Save Note</NButton>
    </NCard>
  </div>
</template>
<script lang="ts" setup>
const { supabase } = useSupabase();
const { user } = useAuth();
const notesInput = reactive({
  title: "",
  note: "",
});

const handleSubmit = async () => {
  if (!notesInput.title || !notesInput.note) return;
  await supabase.from("notes").insert({
    title: notesInput.title,
    note: notesInput.note,
    user_id: user.value.id
  })
  notesInput.title = "";
  notesInput.note = "";
};
</script>
<style scoped>
.card {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
}
.input,
.textarea,
.button {
  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  margin-top: 15px;
  border-radius: 0.25rem;
  padding: 0.2rem;
}
</style>
