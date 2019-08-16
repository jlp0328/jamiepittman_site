<template>
  <div class="layout">
      <div class="banner">
        <h1>Jamie Pittman</h1>
      </div>
      <nav class="menu">
          
      </nav>
      <slot/>
      <nav class="footer">

      </nav>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style>
@font-face {
  font-family: FunSized;
  src: url('../assets/FunSized.ttf');
  font-weight: normal
}
@font-face {
  font-family:Slapstick;
  src: url('../assets/Slapstick.ttf');
  font-weight: normal
}

body {
  /* font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif; */
  font-family: Slapstick;
  margin:0;
  padding:0;
  line-height: 1.5;
  height: 100vh;
  display: grid;
}

h1 {
    font-size: 48px;
}

.banner{
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: FunSized;
    color: white;
    background: #DB5D7C;
}

.menu{
    background: #4B94A3;
    color: #FFE7BC;
}

.footer {
     background: #4B94A3;
    color: #FFE7BC;
}

.layout {
display: grid;
grid-template-rows: 20% 10% 60% 10%;
height: 100vh;


}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
