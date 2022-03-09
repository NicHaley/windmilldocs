import React from 'react';
import Postgres from '../../static/third_party_logos/postgres.svg';
import Mysql from '../../static/third_party_logos/mysql.svg';
import Mongo from '../../static/third_party_logos/mongo.svg';
import Slack from '../../static/third_party_logos/slack.svg';
import Slideshow from '../components/Slideshow';
import 'react-slideshow-image/dist/styles.css';

import
{
	ClockIcon,

	EyeIcon,

	HomeIcon,
	LightningBoltIcon,
	LockClosedIcon,

	ShieldCheckIcon,
	ExternalLinkIcon,
	SwitchHorizontalIcon,
} from '@heroicons/react/outline'

const features = [
	{
		name: 'UI? Done',
		description: <span>UI is autogenerated from your scripts. Gain velocity, reduce tech debt.</span>,
		icon: LightningBoltIcon,
	},
	{
		name: 'Schedules',
		description: 'Trigger scripts using cron-like schedule without needing to manage your own cron deamon and servers',
		icon: ClockIcon,
	},
	{
		name: 'Self-hostable workers (coming soon!)',
		description: 'If needed, the workers executing your scripts and secrets can be self-hostable on-prem.',
		icon: HomeIcon,
	},
	{
		name: 'Granular Permissions & Approval flows (latter coming soon!)',
		description: <span>Every item is personal by default. Change ownership or share (read-only or not) with specific users, groups or your entire org. Request approval for execution through Slack or text (Coming soon!)</span>,
		icon: LockClosedIcon,
	},
	{
		name: 'Immutable scripts and versioning',
		description: <span>Scripts are never overwritten, they are versioned using our simplified and integrated git scheme. Each version of a script
			has its own hash so that you can edit script without worries.</span>,
		icon: ClockIcon,
	},
	{
		name: 'Push to Deploy & exportable workspace: No lock-in',
		description: <span>Deploy automatically during CI/CD from Github and export at anypoint your entire workspace as tarball. Your scripts are not tied to windmill.</span>,
		icon: SwitchHorizontalIcon,
	},
	{
		name: 'Secrets & Sensitive values, no trust needed',
		description: `Secrets encryption can be asymetric if needed so that no one else than the private key holder (you) can see your secrets and sensitive-values when using self-hosted workers.`,
		icon: ShieldCheckIcon,
	},
	{
		name: 'Slack commands and Webhooks',
		description: 'In addition to the UI and schedules, trigger scripts directly from a /windmill slack command or from internet exposed webhooks!',
		icon: ExternalLinkIcon,
	},
	{
		name: 'Audit logs',
		description: 'Root cause any mishaps and learn from your mistakes thanks to exhaustive audit logs',
		icon: EyeIcon,
	},
	

]

export default function HomepageFeatures() {
	return (
		<div>
			<div className="relative pt-16 pb-10">
				<div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
					<h2 className="text-base font-semibold uppercase tracking-wider text-blue-600">Everything in one-platform</h2>
					<p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
						Windmill is a single source of truth to develop, share, and run all your automations and internal apps.
					</p>
					<div className="mt-12">
						<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
							{features.map((feature) => (
								<div key={feature.name} className="pt-6">
									<div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
										<div className="-mt-6">
											<div>
												<span className="inline-flex items-center justify-center rounded-md bg-blue-500 p-3 shadow-lg">
													<feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
												</span>
											</div>
											<h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">{feature.name}</h3>
											<p className="mt-5 text-base text-gray-500">{feature.description}</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className="relative py-10 overflow-hidden">
				<div className="relative">
					<div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:grid-flow-col-dense ">
						<div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
							<div>
								<div className="mt-6">
									<h2 className="text-3xl font-extrabold tracking-tight font-boldtext-gray-900">
										Build complex workflows in minutes without accumulating UI tech debt
									</h2>
									<p className="mt-4 text-lg text-gray-500">
										Apps and their UI are automatically generated and continuously updated from your script parameters.
										<br /><br />
										The arguments of your main function are parsed with their names, types 
										and default parameters to build an App UI automatically. All python types have dedicated form fields, even complex ones.
										<br /><br />
										The automatically generated UI can then be, if desired, customised and specialized with information that is impossible to infer from a script.
										<span className='font-bold'>The generated UI makes it very simple to expose your app to non-technical users while 
										not requiring any effort from the script author.</span>
									</p>
								</div>
							</div>
						</div>
						<div className="mt-12 sm:mt-16 lg:mt-0 lg:col-span-2">
							<div className="flex p-4 lg:-ml-4 sm:pr-6 lg:px-0  lg:h-full ">
								<img
									className="w-full lg:max-w-none m-auto"
									src="/img/parser.png"
									alt="UI parser"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="mt-4">
				<div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-10">
					<div className="px-4 max-w-xl mx-auto sm:px-6 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
						<div>
							<div className="mt-6">
								<h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
									Make your internal operations production grade with ease
								</h2>
								<p className="mt-4 text-lg text-gray-500">
									By relying on Windmill, you ensure that your team never has to worry about deploying and managing
									the infra of your internal operations.
									<br /><br />
									Secure your sensitive information and passwords: your <span className='font-bold'>secrets</span> are tightly permissioned.
									<br /><br />
									Keep track of operations with <span className='font-bold'>audit logs</span> enabling you to root cause quickly any mishaps.
									<br /><br />
									Define visibility, edit rights and executability for your scripts, resources, schedules, etc using <span className='font-bold'>groups' and users' granular permissions</span>.
									<br /><br />
									Upskill your less technical members interested in authoring scripts themselves by having them learn Python in an accessible and integrated environment.
								</p>
							</div>
						</div>
					</div>
					<div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
						<div className="flex p-4 lg:-ml-4 sm:pr-6 lg:px-0  lg:h-full">
							<img
								className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5  lg:w-auto m-auto"
								src="/img/run_script.png"
								alt="Run UI"
							/>
						</div>
					</div>
				</div>
			</div>
			

					<div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:grid-flow-col-dense lg:gap-10">
						<div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0 lg:col-span-2">
							<div>
								<div className="mt-6">
									<h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
										Replace all your sparely used niche tools: <br/> We cover every use-case and to any API
									</h2>
									<p className="mt-4 text-lg text-gray-500">
										Windmill is extremely generic, it uses simple but powerful abstractions. If you can script it, then windmill can do it.
										<br /><br />
										Trigger scripts from  <span className='font-bold'>slack commands</span>,  <span className='font-bold'>autogenerated UI</span>,  <span className='font-bold'>Webhooks</span> and  <span className='font-bold'>Schedules</span>.
										<br /><br />
										Many tools do only one thing, and are focused on one specific problem. You need to setup many different niche tools that only few will end up using.
										<br /><br />
										By reducing the number of tools you use, you increase standardization and make it easier for your whole team to master the one tool to rule them all (and in darkness, bind them ... as API connector).
										<br /><br />
										Unliked other automation tools, we do not reinvent the wheel with proprietary connectors and UI, connect to any API using its standard python client available in PyPI.
										<span className='font-bold'>Any python library becomes a connector.</span><br />
										<div className="flex flex-row gap-4 mt-4 justify-center">
											<Postgres />
											<Mysql />
											<Mongo />
											<Slack />
									<span className='text-xs font-mono my-auto'>... anything with a python client</span>
										</div>
									</p>
								</div>
							</div>
						</div>
						<div className="mt-12 sm:mt-16 lg:mt-0 lg:col-span-1">
					<div className="flex flex-col justify-center p-4 lg:-ml-4 sm:pr-6 lg:px-0 mx-auto lg:h-full ">
						<div class="my-auto">
						<img
							className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:w-auto object-scale-down"
							src="/img/schedule.png"
							alt="Schedule"
						/>
							<div className="object-scale-down w-full lg:w-auto">
						<img
								className="m-auto mt-10 rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 "

							src="/img/slack_command.png"
							alt="Slack command"
						/>
						</div>
						</div>
							</div>
						</div>
					</div>


			<div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-5 lg:grid-flow-col-dense lg:gap-10">
				<div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:col-span-2 lg:mx-0 lg:px-0">
							<div>
								<div className="mt-6">
									<h2 className="text-3xl font-extrabold tracking-tight font-boldtext-gray-900">
										Coding is seldom the bottleneck, it is everything else
									</h2>
									<p className="mt-4 text-lg text-gray-500">
										Not just for developers, the generated Apps are meant to be used by all, and the included Webeditor makes it easy and gratifying to learn the basics of python scripts.
								<br /><br />
								As a dev, you will feel right at home with Windmill. Indeed, most of the concepts used throughout windmill are the ones you are already familiar as a developer:<br />
								<ul className='list-disc pl-8'>
									<li>scripts are versioned with their hash under a simplified git lineage</li>
									<li> deploy from github as part of your CI/CD</li>
									<li> groups (similar to unix groups)</li>
									<li> jsonschemas for payload and resources validation/definition</li>
									<li> permissions are read or write to users or groups</li>
									<li> every item is uniquely identified by a clear hierarchic path</li>
									<li> schedules are defined in a cron format</li>
								</ul>
								<br /><br />
								Our webeditor is based on Visual Studio code. It uses monaco. In addition, we provide smart assistants such as black, autocompletion and flycheck (with pyright) through our own LSP servers.
									</p>
								</div>
							</div>
						</div>
						<div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1 lg:col-span-3">
								<Slideshow></Slideshow>
								{/* <img
									className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5  lg:w-auto m-auto"
									src="/img/editor.png"
									alt="editor"
								/> */}
						</div>
					</div>



			</div>
	)}


