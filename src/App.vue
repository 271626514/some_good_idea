<template>
  <div id="app">
    <div class="layout">
        <Row type="flex">
            <i-col :span="spanLeft" class="layout-menu-left">
                <Menu active-key="1" theme="dark" width="auto">
                    <div class="layout-logo-left"></div>
                    <router-link to="/css">
                        <Menu-item key="1" name="tag1"><span class="layout-text">CSS 形状工具</span></Menu-item>
                    </router-link>
                    <router-link to="/transform">
                        <Menu-item key="2" name="tag2"><span class="layout-text">CSS 样式工具</span></Menu-item>
                    </router-link>
                    <router-link to="/image">
                        <Menu-item key="3" name="tag3"><span class="layout-text">图片工具</span></Menu-item>
                    </router-link>
                    <router-link to="/other">
                        <Menu-item key="4" name="tag4"><span class="layout-text">其他工具</span></Menu-item>
                    </router-link>
                </Menu>
            </i-col>
            <i-col :span="spanRight">
                <div class="layout-header">
                    <i-button type="text">
                        <Icon type="navicon" size="32"></Icon>
                    </i-button>
                </div>
                <div class="layout-content">
                    <div class="layout-content-main"><router-view></router-view></div>
                </div>
            </i-col>
        </Row>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'app',
  data () {
    return {
      spanLeft: 4,
      spanRight: 20,
      iconSize: 5
    }
  }
}
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.layout{
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-content{
    min-height: 800px;
    margin: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
}
.layout-content-main{
    padding: 10px;
}
.layout-copy{
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
}
.layout-menu-left{
    background: #464c5b;
}
.layout-header{
    height: 60px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
}
.layout-logo-left{
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
}
.layout-ceiling-main a{
    color: #9ba7b5;
}
.layout-hide-text .layout-text{
    display: none;
}
.ivu-col{
    transition: width .2s ease-in-out;
}
.layout-text {
    color: #fff;
}

a.router-link-active {
    span {
        color: rgb(51, 153, 255);
    }

    .ivu-menu-item {
        background-color: #363e4f
    }
}
</style>
