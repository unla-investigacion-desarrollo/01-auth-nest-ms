import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `
      <div style="display:flex;justify-content:center;align-items:center;height:100vh;background:#222;">
        <h1 style="color:#61dafb;font-family:sans-serif;font-size:3rem;">
          Hola <span style="color:#fff;">devOps!</span>
        </h1>
      </div>
    `;
  }
}
