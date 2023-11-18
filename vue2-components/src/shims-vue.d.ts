declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}


// vue-shims.d.ts or declarations.d.ts
declare module '*.module.less' {
  const classes: { [key: string]: string };
  export default classes;
}
