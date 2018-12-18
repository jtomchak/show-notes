class SimpleClass {
  Add(a: number, b: number): number {
    return a + b;
  }
}
export default SimpleClass;
const simpleClass = new SimpleClass();
console.log(simpleClass.Add(2, 3));
