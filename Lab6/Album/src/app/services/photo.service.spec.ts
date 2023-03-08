import { TestBed } from '@angular/core/testing';
import { AlbumsPhotosService } from './photo.service';

describe('PhotoService', () => {
  let service: AlbumsPhotosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlbumsPhotosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
