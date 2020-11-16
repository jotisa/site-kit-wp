/**
 * ModuleSetupIncomplete component.
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
import { withFilters } from '@wordpress/components';
import { Component, createInterpolateElement } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import {
	getReAuthURL,
} from '../../util';
import Link from '../Link';
import ModuleSettingsWarning from '../notifications/module-settings-warning';

class ModuleSetupIncomplete extends Component {
	render() {
		const {
			slug,
		} = this.props;

		return (
			<div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
				<ModuleSettingsWarning slug={ slug } />
				{ createInterpolateElement(
					sprintf(
						/* translators: %s: link with next step */
						__( 'Setup incomplete: %s', 'google-site-kit' ),
						`<a>${ __( 'continue module setup', 'google-site-kit' ) }</a>`
					),
					{
						a: <Link
							className="googlesitekit-settings-module__edit-button"
							onClick={ () => {
								global.location = getReAuthURL( slug, true );
							} }
							inherit
						/>,
					}
				) }
			</div>
		);
	}
}

export default withFilters( 'googlesitekit.ModuleSetupIncomplete' )( ModuleSetupIncomplete );
