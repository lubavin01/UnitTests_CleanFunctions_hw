export default function showHealthColor({ health }) {
  let color;
  if (health > 50) {
    color = 'healthy';
  } else if (health >= 15) {
    color = 'wounded';
  } else {
    color = 'critical';
  }

  return color;
}
