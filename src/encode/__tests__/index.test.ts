/**
 * @since 20180911 17:16
 * @author vivaxy
 *
 * @todo chunk-bKGD
 * @todo chunk-cHRM
 * @todo chunk-hIST
 * @todo chunk-IDAT-multiple
 * @todo chunk-IDAT-single
 * @todo chunk-IEND
 * @todo chunk-IHDR
 * @todo chunk-iTXt
 * @todo chunk-PLTE
 * @todo chunk-sBIT
 * @todo chunk-sPLT
 * @todo chunk-tEXt
 * @todo chunk-tIME
 * @todo chunk-tRNS-color-type-0
 * @todo chunk-tRNS-color-type-2
 * @todo chunk-tRNS-color-type-3
 * @todo chunk-zTXt
 * @todo color-type-0
 * @todo color-type-2
 * @todo color-type-3
 * @todo color-type-4
 * @todo color-type-6
 */
import * as path from 'path';
import * as fse from 'fs-extra';
import encode from '..';
import decode from '../../decode';

// @ts-ignore
test.each(global.testcases)('encode %s', async function(
  testcaseName,
  fixturePath,
) {
  const metadata = require(path.join(fixturePath, 'input.json'));
  const imageBinaryData = encode(metadata);
  expect(imageBinaryData).toMatchSnapshot();
  await fse.outputFile(path.join(fixturePath, 'output.png'), imageBinaryData);
  await fse.outputFile(
    path.join(fixturePath, 'decode.json'),
    JSON.stringify(decode(imageBinaryData), null, 2),
  );
});
