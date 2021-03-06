import { DocumentMetadata } from '../abstract/document.mjs';
import { Document } from '../abstract/module.mjs';
import { BaseAmbientLight } from './baseAmbientLight';
import { BaseAmbientSound } from './baseAmbientSound';
import { BaseDrawing } from './baseDrawing';
import { BaseMeasuredTemplate } from './baseMeasuredTemplate';
import { BaseNote } from './baseNote';
import { BaseTile } from './baseTile';
import { BaseToken } from './baseToken';
import { BaseWall } from './baseWall';

/**
 * The base Scene model definition which defines common behavior of an Scene document between both client and server.
 */
export declare class BaseScene extends Document<any, any> {
  static get metadata(): Merge<
    DocumentMetadata,
    {
      name: 'Scene';
      collection: 'scenes';
      label: 'DOCUMENT.Scene';
      isPrimary: true;
      embedded: {
        AmbientLight: typeof BaseAmbientLight;
        AmbientSound: typeof BaseAmbientSound;
        Drawing: typeof BaseDrawing;
        MeasuredTemplate: typeof BaseMeasuredTemplate;
        Note: typeof BaseNote;
        Tile: typeof BaseTile;
        Token: typeof BaseToken;
        Wall: typeof BaseWall;
      };
    }
  >;
}
