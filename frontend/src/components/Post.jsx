/* eslint-disable react/prop-types */


const Post = ({index, post, children}) => {
  return (
    <div key={index} className="mb-6">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="font-bold text-lg">{post.title}</h2>
          <p className="text-[10px] mb-2">{new Date(post.createdAt).toLocaleDateString()}</p>
        </div>

        <div>{children}</div>

      </div>
      <p className="text-sm">{post.body}</p>

      <div className="h-px w-full bg-gradient-to-r from-indigo-50 via-indigo-500/70 to-indigo-50 mt-6"></div>

    </div>
  )
}

export default Post