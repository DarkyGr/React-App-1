function Title() {
  // jsx
  const nombre = "Kask";
  if (nombre) {
    return <h1>Hello {nombre}!</h1>;
  }
  return <h1>Hello World!</h1>;
}

export default Title;