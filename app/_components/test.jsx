'use client';
import React from 'react'
function Test() {

    const send = async () => {
       
        await sendMail({
          to: "boka22986@gmailcom",
          name: "Vahid",
          subject: "Test Mail",
          body: "<h1>HIIIIIIIIII</h1>",
        });
      };
  return (
    <main>
      <form>
        <button onClick={send}>test</button>
      </form>
    </main>
  )
}

export default Test
