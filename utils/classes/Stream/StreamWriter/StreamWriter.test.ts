import { WriteStream } from 'fs';
import { execSync } from 'child_process';
import { join } from 'path';
import { FileNotFoundException } from '../../../../exceptions';
import { StreamReader } from '../StreamReader';
import { StreamWriter } from './StreamWriter';

describe('StreamWriter', () => {
  const path = join(process.cwd(), 'dummy.txt');
  const streamWriter: StreamWriter = new StreamWriter(path);
  const streamReader: StreamReader = new StreamReader(path);

  beforeEach(() => {
    streamWriter.create();
    streamReader.create();
  });
  afterEach(() => {
    streamWriter.close();
    streamReader.close();
  });
  afterAll(() => execSync(`rm -rf ${path}`));

  it('validates \'path\' param', () => {
    expect(() => new StreamWriter('src')).toThrowError(FileNotFoundException);
  });

  it('can access the stream through a property', () => {
    expect(streamWriter.stream).toBeInstanceOf(WriteStream);
  });
});
