import React from 'react'
import { translate } from 'react-i18next'

import Modal from '../../Modal/index'
import Form from '../../Form/index'
import Button from '../../Button/index'

import { ReactComponent as Advanced } from '../../../assets/advanced.svg'

import styles from './index.module.scss'

class AdvancedModal extends React.Component {
  state = {
    submitted: false,
  }

  handleSubmit = data => {
    this.setState(
      {
        submitted: true,
      },
      () => {
        const query = Object.keys(data).map(key => `${key}=${data[key]}`).join('&')
        fetch(`/apply.html?${query}&version=advanced`).then()
      }
    )
  }

  renderRightContent() {
    const { t } = this.props
    const { submitted } = this.state

    if (submitted) {
      return (
        <div>
          <div className="h2">{t('We have received your trial application')}</div>
          <p style={{ marginBottom: 80, marginTop: 8 }}>
            {t('Please keep your email and phone works so that our pre-sales team can communicate with you as soon as possible')}
          </p>
          <div className="h4">{t('More Options')}</div>
          <p style={{ marginTop: 8 }}>
            <span>{t('You can also download the trial version')}</span>&nbsp;
            <a href="//kubesphere.anybox.qingcloud.com/s/JE7NWkkT6EaI9Oksr0aJ5HvPFwtO2peL?type=file&id=3114265" target="_blank">{t('Online Installation')}</a>
          </p>
        </div>
      )
    }

    return (
      <div>
        <div className="h2">{t('Submit your contact information')}</div>
        <p style={{ marginBottom: 20, marginTop: 8 }}>
          {t(
            'We have a professional pre-sales support team to provide you with pre-sales support'
          )}
        </p>
        <Form onSubmit={this.handleSubmit} className={styles.form}>
          <Form.Item label={t('How do i call you?')}>
            <input type="text" name="name" required />
          </Form.Item>
          <div className="form-item-group">
            <Form.Item label={`${t('Phone')}:`}>
              <input type="number" name="phone" required />
            </Form.Item>
            <Form.Item label={`${t('Email')}:`}>
              <input type="email" name="email" placeholder="User@example.com" required />
            </Form.Item>
          </div>
          <Form.Item label={`${t('Requirement Details')}:`}>
            <textarea
              name="desc"
              placeholder={t('Please briefly describe your requirements')}
              span={4}
              required
            />
          </Form.Item>
          <Button htmlType="submit" type="control">
            {t('Apply for trial')} →{' '}
          </Button>
        </Form>
      </div>
    )
  }

  render() {
    const { t } = this.props
    return (
      <Modal
        shouldCloseOnOverlayClick
        ariaHideApp={false}
        className={styles.modal}
        style={{ content: { width: 960 } }}
        {...this.props}
      >
        <div className={styles.body}>
          <div className={styles.leftContent}>
            <div style={{ marginBottom: 40 }}>
              <Advanced />
              <div className={styles.text}>
                <div className="h2">{t('Advanced Edition')}</div>
                <p>{t('Advanced Edition')}</p>
              </div>
            </div>
            <p
              dangerouslySetInnerHTML={{
                __html: t(
                  'More than 1000 users have already downloaded and used KubeSphere ,  please contact us via <a href="//github.com/kubesphere/kubesphere" target="_blank">Github</a> or <a href="//kubesphere.slack.com" target="_blank">Slack</a> if you have any questions.'
                ),
              }}
            />
          </div>
          <div className={styles.rightContent}>{this.renderRightContent()}</div>
        </div>
      </Modal>
    )
  }
}

export default translate('base')(AdvancedModal)
