<template>
    <Layout>
      <Row utils="g-gs">
        <Col sm="6" xl="6" xxl="3">
            Home
        </Col>
      </Row>
    </Layout>
  </template>
  
  <script>
  // @ is an alias to /src
  import Layout from '@/layout/Index.vue';
  import Row from '@/components/template/layout/Row.vue';
  import Col from '@/components/template/layout/Col.vue';
  
  export default {
    name: 'HomePage',
    components: {
      Layout,
      Row,
      Col,
  },
    data(){
      return {

      }
    }
  }
  </script>
  