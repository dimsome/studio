import { Module } from '@nestjs/common';
import { DiscoveryModule } from '@nestjs/core';

import { CacheModule } from '~cache/cache.module';

import { PositionBalanceFetcherRegistry } from './position-balance-fetcher.registry';
import { PositionFetcherRegistry } from './position-fetcher.registry';
import { PositionFetcherTemplateRegistry } from './position-fetcher.template-registry';
import { PositionKeyService } from './position-key.service';
import { PositionPresenterRegistry } from './position-presenter.registry';
import { PositionSources } from './position-source';
import { PositionController } from './position.controller';
import { PositionService } from './position.service';
import { AppTokenSelectorService } from './selectors/app-token-selector.service';
import { TokenDependencySelectorService } from './selectors/token-dependency-selector.service';

@Module({
  imports: [DiscoveryModule, CacheModule],
  providers: [
    ...PositionSources,
    AppTokenSelectorService,
    PositionBalanceFetcherRegistry,
    PositionFetcherRegistry,
    PositionFetcherTemplateRegistry,
    PositionKeyService,
    PositionPresenterRegistry,
    PositionService,
    TokenDependencySelectorService,
  ],
  controllers: [PositionController],
  exports: [
    AppTokenSelectorService,
    PositionBalanceFetcherRegistry,
    PositionFetcherRegistry,
    PositionFetcherTemplateRegistry,
    PositionKeyService,
    PositionPresenterRegistry,
    PositionService,
    TokenDependencySelectorService,
  ],
})
export class PositionModule {}
