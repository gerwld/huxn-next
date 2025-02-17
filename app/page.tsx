import AdminInfo from "@/components/AdminInfo"
import Counter from "@/components/Counter"
import User from "@/components/User"
import UserInfo from "@/components/UserInfo"

const page = () => {
  return (
    <section>
      {/* <User name="alex" age={20} isStudent={true} />
      <User name="alex" age={20} isStudent={true} >
        <p>I'm a children</p>
      </User> */}

      {/* <UserInfo username="qwdqwd" email="bb@email.com" age={23} location={["esdve", "Canada"]} /> */}
      {/* <AdminInfo username="fqwd" email="sb@email.com" age={40} location={["esdve", "Canada"]} admin={true} /> */}

      <Counter/>
    </section>
  )
}

export default page