import React from "react";
import Layout from "../../src/components/_layouts/Layout";

const Users = () => {

  return (
      <>
        <Layout title={'user管理'} >


        </Layout>
      </>
  )
}

export async function getServerSideProps(ctx) {
  let users = null;

  try {
    const res = await fetch(process.env.API_URL + `/api/hr_admin/users`, {
      headers: {
        cookie: ctx.req.headers.cookie
      }
    })
    users = await res.json();
  } catch (e) {
    console.log(e)
  }

  return {
    props: {
      users: users
    }
  }
}

export default Users