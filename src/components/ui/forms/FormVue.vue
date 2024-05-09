<template>
  <Form :validation-schema="validationSchema" @submit="onSubmit" class="max-w-md mx-auto">
    <div>
      <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
      <Field name="title" id="title" type="text"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      <ErrorMessage name="title" class="text-red-500 text-sm" />
    </div>
    <div class="mt-4">
      <label for="author" class="block text-sm font-medium text-gray-700">Author</label>
      <Field name="author" id="author" type="text"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      <ErrorMessage name="author" class="text-red-500 text-sm" />
    </div>
    <div class="mt-4">
      <label for="year" class="block text-sm font-medium text-gray-700">Year</label>
      <Field name="year" id="year" type="number"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
      <ErrorMessage name="year" class="text-red-500 text-sm" />
    </div>
    <div class="mt-4">
      <ButtonVue type="submit">
        Submit
      </ButtonVue>
    </div>
  </Form>
</template>

<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import * as zod from 'zod';

const validationSchema = toTypedSchema(
  zod.object({
    title: zod.string().min(5, { message: 'Title is required 5 letter' }),
    author: zod.string().min(5, { message: 'Author is required letter' }),
    year: zod.number().min(1000, { message: 'Please enter a valid year' }).max(new Date().getFullYear(), { message: 'Year cannot be in the future' }),
  })
);


async function onSubmit(values, { resetForm }) {
  // send data to API
  fetch("http://localhost:3000/books", {
    method: "POST",
    body: JSON.stringify(values,null,2),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
// reset the form and the field values to their initial values
resetForm();
}
</script>
