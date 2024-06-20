import {
  CanvasTexture,
  Color,
  NearestFilter,
  RepeatWrapping,
  Uniform,
} from "three";
import { Effect } from "postprocessing";

const fragmentShader = `
uniform sampler2D uCharacters;
uniform float uCellSize;
uniform vec3 uColor;

void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
    vec2 cellSize = vec2(uCellSize);
    vec2 coord = mod(uv * cellSize, vec2(1.0));
    vec4 charColor = texture2D(uCharacters, coord);
    outputColor = vec4(uColor * charColor.rgb, 1.0);
}
`;

export interface ASCIIEffectProps {
  characters?: string;
  fontSize?: number;
  cellSize?: number;
  color?: string;
}

export class ASCIIEffect extends Effect {
  constructor({
    characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    fontSize = 128,
    cellSize = 8,
    color = "#ffffff",
  }: ASCIIEffectProps = {}) {
    const uniforms = new Map<string, Uniform>([
      ["uCharacters", new Uniform(new CanvasTexture())],
      ["uCellSize", new Uniform(cellSize)],
      ["uColor", new Uniform(new Color(color))],
    ]);

    super("ASCIIEffect", fragmentShader, { uniforms });

    const charactersTexture = this.createCharactersTexture(
      characters,
      fontSize
    );
    this.uniforms.get("uCharacters").value = charactersTexture;
  }

  createCharactersTexture(characters: string, fontSize: number): CanvasTexture {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const size = 1024;
    const rows = Math.ceil(Math.sqrt(characters.length));
    const cellSize = size / rows;

    canvas.width = size;
    canvas.height = size;

    if (!ctx) throw new Error("Failed to get 2D context");

    ctx.font = `${fontSize}px Arial`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "white";

    for (let i = 0; i < characters.length; i++) {
      const char = characters[i];
      const x = (i % rows) * cellSize + cellSize / 2;
      const y = Math.floor(i / rows) * cellSize + cellSize / 2;
      ctx.fillText(char, x, y);
    }

    const texture = new CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }
}
