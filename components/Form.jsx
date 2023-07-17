import React from 'react'

const Form = ({type, post, setPost, submitting, handleSubmit}) => {
  return (
  <section className='w-full max-w-full flex-start flex-col'>
    <h1 className='head_text text-left'>
      <span className='blue_gradient'>
       {type} Post
      </span>
    </h1>
    <p>{type} and share amazing prompts with the world, and let your imagination run wild with any AI-powwerd platform</p>
    <form 
    onSubmit={handleSubmit}
    className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'>
      <lable>
        <span className='font-satoshi font-semibold text-base text-gray-700'>Your AI Prompt</span>
        <textarea
        value={post.prompt}
        onChange={(e) => setPost({ ...post,
        prompt: e.target.value})}
        placeholder='Write your prompt here...'
        required
        className='form_textarea'
        />
      </lable>
      <lable>
        <span className='font-satoshi font-semibold text-base text-gray-700'>Prompt Field
        <span>(#product, #webdevelopment, #idea)</span>
        </span>
        <input
        value={post.tag}
        onChange={(e) => setPost({ ...post,
        tag: e.target.value})}
        placeholder='#tag'
        required
        className='form_input'
        />
      </lable>
    </form>
  </section>
  )
}

export default Form
