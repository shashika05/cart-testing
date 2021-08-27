export default function greet() {
  const time = new Date().getHours();
  if (time < 12 && time >= 0) {
    return "Good Morning!";
  }
  if (time > 12 && time < 14) {
    return "Good Afternoon!";
  }
  if (time >= 14 && time < 19) {
    return "Good Evening!";
  }
  if (time >= 19 && time < 24) {
    return "Good Night!";
  }
}
