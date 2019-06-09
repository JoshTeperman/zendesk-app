const mockTicketsArray = [
  {
      "url": "https://joshteperman.zendesk.com/api/v2/tickets/1.json",
      "id": 1,
      "external_id": null,
      "via": {
          "channel": "sample_ticket",
          "source": {
              "from": {},
              "to": {},
              "rel": null
          }
      },
      "created_at": "2019-05-30T03:19:31Z",
      "updated_at": "2019-05-30T03:19:32Z",
      "type": "incident",
      "subject": "Sample ticket: Meet the ticket",
      "raw_subject": "Sample ticket: Meet the ticket",
      "description": "Hi Josh,\n\nThis is your first ticket. Ta-da! Any customer request sent to your supported channels (email, chat, voicemail, web form, and tweet) will become a Support ticket, just like this one. Respond to this ticket by typing a message above and clicking Submit. You can also see how an email becomes a ticket by emailing your new account, support@joshteperman.zendesk.com. Your ticket will appear in ticket views.\n\nThat's the ticket on tickets. If you want to learn more, check out: \nhttps://support.zendesk.com/hc/en-us/articles/203691476\n",
      "priority": "normal",
      "status": "open",
      "recipient": null,
      "requester_id": 382436378771,
      "submitter_id": 382347803272,
      "assignee_id": 382347803272,
      "organization_id": null,
      "group_id": 360004913932,
      "collaborator_ids": [],
      "follower_ids": [],
      "email_cc_ids": [],
      "forum_topic_id": null,
      "problem_id": null,
      "has_incidents": false,
      "is_public": true,
      "due_at": null,
      "tags": [
          "sample",
          "support",
          "zendesk"
      ],
      "custom_fields": [],
      "satisfaction_rating": null,
      "sharing_agreement_ids": [],
      "fields": [],
      "followup_ids": [],
      "brand_id": 360002502412,
      "allow_channelback": false,
      "allow_attachments": true
  },
  {
      "url": "https://joshteperman.zendesk.com/api/v2/tickets/2.json",
      "id": 2,
      "external_id": null,
      "via": {
          "channel": "email",
          "source": {
              "from": {
                  "address": "joshteperman@gmail.com",
                  "name": "Josh Teperman"
              },
              "to": {
                  "name": "Coder academy ",
                  "address": "support@joshteperman.zendesk.com"
              },
              "rel": null
          }
      },
      "created_at": "2019-05-30T03:27:05Z",
      "updated_at": "2019-05-30T03:27:05Z",
      "type": null,
      "subject": "Test ticket",
      "raw_subject": "Test ticket",
      "description": "Test ticket body",
      "priority": null,
      "status": "open",
      "recipient": "support@joshteperman.zendesk.com",
      "requester_id": 382347803272,
      "submitter_id": 382347803272,
      "assignee_id": 382347803272,
      "organization_id": 360497868672,
      "group_id": 360004913932,
      "collaborator_ids": [],
      "follower_ids": [],
      "email_cc_ids": [],
      "forum_topic_id": null,
      "problem_id": null,
      "has_incidents": false,
      "is_public": true,
      "due_at": null,
      "tags": [],
      "custom_fields": [],
      "satisfaction_rating": null,
      "sharing_agreement_ids": [],
      "fields": [],
      "followup_ids": [],
      "brand_id": 360002502412,
      "allow_channelback": false,
      "allow_attachments": true
  },
  {
      "url": "https://joshteperman.zendesk.com/api/v2/tickets/3.json",
      "id": 3,
      "external_id": null,
      "via": {
          "channel": "email",
          "source": {
              "from": {
                  "address": "joshteperman@gmail.com",
                  "name": "Josh Teperman"
              },
              "to": {
                  "name": "Coder academy ",
                  "address": "support@joshteperman.zendesk.com"
              },
              "rel": null
          }
      },
      "created_at": "2019-06-01T03:39:12Z",
      "updated_at": "2019-06-01T03:39:12Z",
      "type": null,
      "subject": "Support Request #2",
      "raw_subject": "Support Request #2",
      "description": "please help",
      "priority": null,
      "status": "open",
      "recipient": "support@joshteperman.zendesk.com",
      "requester_id": 382347803272,
      "submitter_id": 382347803272,
      "assignee_id": 382347803272,
      "organization_id": 360497868672,
      "group_id": 360004913932,
      "collaborator_ids": [],
      "follower_ids": [],
      "email_cc_ids": [],
      "forum_topic_id": null,
      "problem_id": null,
      "has_incidents": false,
      "is_public": true,
      "due_at": null,
      "tags": [],
      "custom_fields": [],
      "satisfaction_rating": null,
      "sharing_agreement_ids": [],
      "fields": [],
      "followup_ids": [],
      "brand_id": 360002502412,
      "allow_channelback": false,
      "allow_attachments": true
  }
]

module.exports.mockTicketsArray = mockTicketsArray;