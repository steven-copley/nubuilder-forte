=== nuBuilder Forte ===

Name: nuBuilder Forte

Contributors: nubuilder

Donate link: https://www.nubuilder.com/#donate

Tags: database, low-code, reports, manage data, inventory, statistics, report, customer report, user report, custom application, build application

Requires at least: 4.9.8

Tested up to: 5.0.3

Stable tag: 5.0.3

Requires PHP: 5.2.4

License: GPLv3

License URI: https://www.gnu.org/licenses/old-licenses/gpl-3.0.html

nuBuilder is the world's best: open-source, low-code application and report builder.

== Description ==

Using nuBuilder Forte with Wordpress will enable you to build your own custom reports and forms to manage your data.

nuBuilder enables you to make any application that you want or need with the least amount of effort and the least amount of learning.

nuBuilder Forte is the 4th version of nuBuilder. A browser-based tool created by nuSoftware for developing web-based database applications.

nuBuilder uses either MySQL or Maria DB databases and gives its users the ability to do database operations like: 
* Search
* Create
* Insert
* Read
* Update
* Delete

= SUPPORT =
To help continue development and support for this free plugin please consider [making a donation.](https://www.nubuilder.com/#donate "making a donation") Your donation will help encourage the plugin’s continued development and better support for users.

= Alternative to MS-Access =
nuBuilder provides an ideal replacement/upgrade from MS-Access. It won't get slower and slower as you add more records; un-like MS-Access.

= Easy To Learn For End Users =
nuBuilder uses an Uncluttered Interface which makes it very easy for new users to find there way around.

= Easy To Learn For Developers =
nuBuilder is designed to be as easy as possible to get started with building Forms and Search Screens. With online videos and documentation, you have all the information you need to become a nuBuilder developer.

= Build Business Applications Fast =
nuBuilder makes it affordable to build custom business solutions.

= Use your existing PHP and MySQL skills =
nuBuilder is built upon industry standard technology stack and does not require you to learn any non-standard languages or templating systems.

= Single File Backup =
nuBuilder stores all forms, reports, company data and PHP/JavaScript code in MySQL. You can backup your entire application within a single database file.

== Installation ==

1. Upload the plugin files to the `/wp-content/plugins/nubuilder-forte` directory, or install the plugin through the WordPress plugins screen directly.
2. Activate the plugin through the 'Plugins' screen in WordPress

== Changelog ==

= 1.0 =
* This is the first version of nuBuilder Forte which has been converted to work as a Wordpress plugin.

= 1.1 = 
* Added more cleanup on uninstall so that the nubuilder tables and views will be deleted when uninstalling
* Added more Form choices in the Lookup for Forms in the Access Level sreen
* Tested with Wordpress version 5.0
* Removed scrolling on shortcodes
* A few Javascript tweaks

= 1.2 = 
* Added missing uninstall script
* Added a few tweaks to using shortcodes

= 1.3 = 
* Fixed missing user_id in short code
* Changed Access Level home Form to include all Form types
* Fixed missing function to clear old sessions

= 1.4 = 
* Javascript loop bug on first page load fixed.
* More screenshots.
* Set focus to lookup when Browse is closed fixed.
* compatibility issues with PHP 7.3 fixed. 

= 1.5 =
* Fix a bug when a non globeadmin user logins but does not have any permissions added to their access-level yet.
* Extended the short code to allow the currently logged in user, when viewing a page with a short-code that has the access-level (al) set to blank, they will get their existing access-level permissions whilst on that page.
* Fixed few bugs we found that only occur with the latest version of PHP (7.3).
* Javascript changes to user screen to remove items not needed in the plugin version of nubuilder.
* Cursor Starts on the first Object of the first Tab.
* Fixed Images not appearing in PDFs.

== Upgrade Notice ==

= 1.0 = 
This is the first version of nuBuilder Forte which has been converted to work as a Wordpress plugin.

= 1.1 = 
* Added more cleanup on uninstall so that the nubuilder tables and views will be deleted when uninstalling
* Added more Form choices in the Lookup for Forms in the Access Level sreen
* Tested with Wordpress version 5.0
* Removed scrolling on shortcodes
* A few Javascript tweaks

= 1.2 =
* Added missing uninstall script
* Added a few tweaks to using shortcodes

= 1.3 =
* Fixed missing user_id in short code
* Changed Access Level home Form to include all Form types
* Fixed missing function to clear old sessions

= 1.4 =
* Javascript loop bug on first page load fixed.
* More screenshots.
* Set focus to lookup when Browse is closed fixed.
* compatibility issues with PHP 7.3 fixed.

= 1.5 =
* Fix a bug when a non globeadmin user logins but does not have any permissions added to their access-level yet.
* Extended the short code to allow the currently logged in user, when viewing a page with a short-code that has the access-level (al) set to blank, they will get their existing access-level permissions whilst on that page.
* Fixed few bugs we found that only occur with the latest version of PHP (7.3).
* Javascript changes to user screen to remove items not needed in the plugin version of nubuilder.
* Cursor Starts on the first Object of the first Tab.
* Fixed Images not appearing in PDFs.

== Documentation ==

Here is a link to PDF instructions to get started as a nuBuilder developer [nuBuilder-Forte-User-Guide](https://www.nubuilder.com/storage/pdf/nuBuilderForte_UserGuide.pdf "nuBuilder Forte User Guide")

Here is a link to the nuBuilder Forte Wiki Documentation [nuBuilder-Forte-Wiki-Documentation](https://wiki.nubuilder.net/nubuilderforte/index.php/Main_Page "nuBuilder Forte Wiki Documentation")

== Frequently Asked Questions ==

= Does this plugin work with my existing standalone alone version of nuBuilder4 ? =
Yes, your existing nuBuilder4 database will need to be imported into your Wordpress database, then
you will need to click on 'activate' plugin, then login as globeadmin and run the nubuilder updater.

== Screenshots ==

1. Accessing nuBuilder within Wordpress
2. Building a Form in nuBuilder
3. Creating a shortcode snippet
4. Display a shortcode snippet
5. SQL builder GUI
6. Report Builder GUI
7. Fast Form Builder




