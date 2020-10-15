// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBoth from '../../../app/controller/both';
import ExportFile from '../../../app/controller/file';
import ExportHome from '../../../app/controller/home';
import ExportPlay from '../../../app/controller/play';

declare module 'egg' {
  interface IController {
    both: ExportBoth;
    file: ExportFile;
    home: ExportHome;
    play: ExportPlay;
  }
}
