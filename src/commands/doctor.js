import {
  Doctor,
} from 'xdl';

import log from '../log';

async function action(projectDir) {
  if (await Doctor.validateWithNetworkAsync(projectDir) === Doctor.NO_ISSUES) {
    log(`Didn't find any issues with your project!`);
  }
}

export default (program) => {
  program
    .command('doctor [project-dir]')
    .description('Diagnoses issues with your Exponent project.')
    .asyncActionProjectDir(action);
};
