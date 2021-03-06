/**
 * DashboardApp component.
 *
 * Site Kit by Google, Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * WordPress dependencies
 */
import { Fragment } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import '../publisher-wins';
import WidgetContextRenderer from '../../googlesitekit/widgets/components/WidgetContextRenderer';
import DashboardMain from './dashboard-main';
import DashboardNotifications from './dashboard-notifications';
import Header from '../Header';
import DateRangeSelector from '../DateRangeSelector';
import PageHeader from '../PageHeader';
import { Cell, Grid, Row } from '../../material-components';

export default function DashboardApp() {
	return (
		<Fragment>
			<Header>
				<DateRangeSelector />
			</Header>

			<DashboardNotifications />

			<div className="googlesitekit-module-page">
				<div className="googlesitekit-dashboard">
					<Grid>
						<Row>
							<Cell size={ 12 }>
								<PageHeader
									className=" googlesitekit-heading-2 googlesitekit-dashboard__heading"
									title={ __( 'Site Overview', 'google-site-kit' ) }
								/>
							</Cell>

							{ featureFlags.widgets.dashboard.enabled && (
								<Cell size={ 12 }>
									<WidgetContextRenderer slug="dashboard" />
								</Cell>
							) }

							<DashboardMain />
						</Row>
					</Grid>
				</div>
			</div>
		</Fragment>
	);
}
