
import Layout from '@components/layouts/article'


const Resume = () => {
    return (
        <Layout title="resume">
            <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
                <object data="/resume.pdf" type="application/pdf" width="100%" height="100%">
                    <p>My Resume</p>
                </object>
            </div>

        </Layout>
    )
}

export default Resume