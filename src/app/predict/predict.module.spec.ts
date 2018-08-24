import { PredictModule } from './predict.module';

describe('PredictModule', () => {
  let predictModule: PredictModule;

  beforeEach(() => {
    predictModule = new PredictModule();
  });

  it('should create an instance', () => {
    expect(predictModule).toBeTruthy();
  });
});
