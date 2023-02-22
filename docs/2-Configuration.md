PickZ can be adjusted to meet your warehouse's layout and processes. Typically, and by default, the workflow will look like this:

![](/img/configuration/process_1.svg)

## Adjusting the workflow

`Configuration` > `Workflow`

You can adjust the PickZ workflow according to your needs.

#### Pick directly from bulk locations

Enabling this skips the replenishment and ignores pick locations, so items will be picked directly from your bulk locations.

#### Skip staging location

Enabling this skips the staging locations, so items will be picked directly to the outbound dock (either from bulk or pick locations, depending on the setting above).

#### Manual putaway

Manual putaway disables the automatic location allocation and gives the user a choice where to store your products upon receiving them.

:::info
The location for automatic putaway will be allocated based on whether there is a location available with the same product stored, or else if there are empty bulk locations available.
More advanced putaway rules are available through fixed locations.
:::

#### Manual order numbers

Enable this if you don't want PickZ to generate order numbers automatically for new orders.

#### Consolidate outbound crossdock orders

When this is enabled, crossdock (orders that go straight from the inbound dock to the outbound dock) orders for the same contact will be consolidated into one outbound order

#### FEFO picking

This is activate the FEFO picking strategy, meaning units with closer expiry dates will be selected first to be picked.

:::info
Expiry dates can be enabled through stock groups/
:::

## Setting up automations

`Configuration` > `Automation`

By default, every step in the PickZ process will be started automatically, if you would like to manually start certain processes (like *picking* or *replenishment*), you can enable any automations through `Configuration` > `Automation`.

## Stock groups & stock group types

`Configuration` > `Stock`

PickZ uses stock group types to divide or bind any kind of stock, based on a set of rules. Different rules and settings can be set for each stock group type. For example, pallets are a physical group type, which means they physically bind stock together, and can only be at one location at a time. Batches, or lots, are a non-physical group type, since they aren't physically bound together (products on different locations can belong to the same batch). When editing or adding stock group types, there are a couple available options:

`Name` This is the internal name to recognize the group type.

`Enabled` Whether the group type should be used or not.

`Required` Whether the group type is required, and thus all products have to belong to one of these stock groups.

`Physical` Whether a stock group is a physical entity (for example a pallet or cart), so products are physically bound together on this stock group, and the group itself can only be at one location at a time.

`Expires` Whether the group type has an expiry date.

`Specifiable` Whether the group type should be able to be specified on outbound orders (for example, being able to send specific pallets to clients, instead of letting PickZ choose the best option).

`ID name` Name of the group type ID, (pallet ID, batch ID, client name, client group).

`prefix` Prefix used when adding new groups.

`Label (single / plural)` The designation of the stock group used by PickZ.

`Final location type` The last location type stock should be bound to groups (for example, in some situations pallets are never moved into staging locations, so the allocation should be removed during picking).

You can create unlimited amounts of group types, so stock and products can be classified in endless amount of ways.

:::info
PickZ has added 2 often used stock group types by default (pallets and batches), which you can use just by enabling them
:::

## Invoicing

`Configuration` > `Invoicing`

PickZ can generate invoices based on quantities sent to the client, or based on the amount of time a product has been in your warehouse by the time it is shipped away. The first type of invoice will be directed to the receiving party, and the latter will be directed to the product owner(s) of the products shipped.

`Enable invoicing` This enables / disabled the entire invoicing module.

`Sales invoice` Enables sales invoices, which are based on quantities and directed to the receiving contact.

`Storage invoice` Enables storage invoices, which are based on the amount a time a product has stayed in the warehouse, and are directed to the product owner(s) of the product(s) shipped away.

:::tip
You can set a product owner for each product under `Products` > `edit`
:::

## Printing

`Configuration` > `Printing`

All labels are generated and streamed as PDF files which you can print from your computer and/or scanner. Printing directly to Zebra label printers is supported through their provided BrowserPrint javascript library.

`width / height` Enter the the size of your labels in mm.

`Enable Zebra printing` Enables support for printing directly to a Zebra label printer from your scanner.

:::caution
Enabling Zebra printing without the required hardware might cause errrors
:::

 `Zebra stock label` The template used by PickZ to send to the printer, this can be filled with dynamic variables which are generated during printing.



