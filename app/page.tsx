import User from "@/components/User"

const page = () => {
  return (
    <section>
      <User name="alex" age={20} isStudent={true} />
      <User name="alex" age={20} isStudent={true} >
        <p>I'm a children</p>
      </User>
    </section>
  )
}

export default page