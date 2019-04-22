import { TestBed } from '@angular/core/testing';

import { ManejadorDeUsuariosService } from './manejador-de-usuarios.service';

describe('ManejadorDeUsuariosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManejadorDeUsuariosService = TestBed.get(ManejadorDeUsuariosService);
    expect(service).toBeTruthy();
  });
});
