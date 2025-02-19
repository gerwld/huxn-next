"use client"
import AdminInfo from "@/components/AdminInfo";
import Counter from "@/components/Counter";
import ElementWrapper from "@/components/ElementWrapper";
import Form from "@/components/Form";
import User from "@/components/User";
import UserInfo from "@/components/UserInfo";

const page = () => {
  return (
    <section>
      {/* <User name="alex" age={20} isStudent={true} />
      <User name="alex" age={20} isStudent={true} >
        <p>I'm a children</p>
      </User> */}

      {/* <UserInfo username="qwdqwd" email="bb@email.com" age={23} location={["esdve", "Canada"]} /> */}
      {/* <AdminInfo username="fqwd" email="sb@email.com" age={40} location={["esdve", "Canada"]} admin={true} /> */}

      {/* <Counter/> */}
      {/* <Form /> */}
      <ElementWrapper elementType="div" className="box">
        <p>This is a div element with a class name of box</p>
      </ElementWrapper>
        
      <ElementWrapper elementType="button" className="button" onClick={() => alert("button click")}>
      button
      </ElementWrapper>
    </section>
  );
};

export default page;
