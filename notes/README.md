# nextjs-notes

## Pages and Layouts

### Layout

Root layout one time render.

When route change then template render every time.

<RootLayout>
    <Page/>
</RootLayout>

<RootLayout>
    <DashboardLayout>
        <Content/>
    </DashboardLayout>
    <Page/>
</RootLayout>

<RootLayout>
   <template>
        <DashboardLayout>
            <Content/>
        </DashboardLayout>
        <Page/></template>
</RootLayout>
