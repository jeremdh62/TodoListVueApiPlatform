<script lang="jsx">
export const Block = {
  render() {
    return (
      <div class="nk-block">
        {this.$slots.default()}
      </div>
    );
  }
};

export const BlockHead = {
  render() {
    return (
      <div class="nk-block-head">
        {this.$slots.default()}
      </div>
    );
  }
};

export const BlockHeadBetween = {
  render() {
    return (
      <div class="nk-block-head-between">
        {this.$slots.default()}
      </div>
    );
  }
};

export const BlockHeadContent = {
  render() {
    return (
      <div class="nk-block-head-content">
        {this.$slots.default()}
      </div>
    );
  }
};

export const BlockTitle = {
  props: {
    tag:{
      type: String
    }
  },
  render() {
    return this.tag ? (
      <this.tag class="nk-block-title">
        {this.$slots.default()}
      </this.tag>
    ) : (
      <h3 class="nk-block-title">
        {this.$slots.default()}
      </h3>
    );
  }
};

export const BlockText = {
  render(){
    return(
      <p>
        {this.$slots.default()}
      </p>
    )
  }
};

export default {
  name: 'BlockContainer',
};
</script>
