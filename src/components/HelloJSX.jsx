export default {
  data() {
    return {
      title: 'HelloJSX',
      outputMessage: 'This is sample message'
    }
  },
  render(h) {
    return (
      <div class="alert alert-info">
        <h2>{ this.title }</h2>
        <p>{ this.outputMessage }</p>
      </div>
    )
  }
}