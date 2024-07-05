uniform vec3 u_intensity;
uniform vec3 u_time;

varying float uVu;
varying float vDisplacement;

void main() {
      float distort = 2.0 * vDisplacement * u_intensity;

      vec3 color = vec3(abs(uVu - 0.5) * 2.0 * (1.0 - distort), 1.0);

      gl_FragColor = vec4(color, 1.0);
}
